import React, {useEffect, useState} from 'react';
import useInput from "../../hooks/useInput";
import {
	FormBody, FormBtn, FormCheckbox, FormCheckboxWrapper,
	FormInput, FormInputCheckbox,
	FormInputWrapper, FormLabel, FormOption, FormSelect,
	FormStyle,
	FormTextarea,
	FormTextError, Success
} from "../../styles/components/FormStyle";
import Select from 'react-select';

const servicesOption = [
	{value: 'Электромонтажные работы', label: 'Электромонтажные работы'},
	{value: 'Проектные работы', label: 'Проектные работы'},
	{value: 'Общестроительные работы', label: 'Общестроительные работы'},
	{value: 'Санитарно-технические работы', label: 'Санитарно-технические работы'},
	{
		value: 'Работы по устройству внутренних инженерных систем и оборудования',
		label: 'Работы по устройству внутренних инженерных систем и оборудования'
	},
	{
		value: 'Монтаж электрооборудования, наружных и внутренних сетей до 750 кВ',
		label: 'Монтаж электрооборудования, наружных и внутренних сетей до 750 кВ'
	},
	{value: 'Монтаж технологического оборудования', label: 'Монтаж технологического оборудования'},
]

const ServicesForm = ({props}) => {
	const name = useInput('', 'name', {isEmpty: true, minLength: 2, maxLength: 15, nameValid: true})
	const email = useInput('', 'email', {isEmpty: true, minLength: 3, isValid: true})
	const phone = useInput('', 'phone', {isEmpty: true, minLength: 11, maxLength: 16})
	const message = useInput('', 'message', {isEmpty: false, maxLength: 200})

	const [select, setSelect] = useState('')
	const [submit, setSubmit] = useState(false)

	const [hasPhone, setPhone] = useState(false)

	// const [currentServices, setCurrentServices] = useState('')
	//
	// const [currentDefault, setCurrentDefault] = useState(servicesOption)
	//
	// const handleClick = e => {
	// 	setCurrentServices(e)
	// 	setCurrentDefault(servicesOption.filter((option) => option.value.toLowerCase().includes(currentServices.toLowerCase())))
	// }

	const phoneHandle = (e) => {
		setPhone(!hasPhone)
	}

	const clearLocalStorage = (e) => {
		localStorage.clear()
	}
	// console.log(select)
	const handleSelectChange = (selectOption) => {
		// console.log(selectOption.value)
		setSelect(selectOption.value)
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		const data = `
			Имя: ${name.value},  Email: ${email.value},  Выбранная услуга: ${select.length > 0 ? select : servicesOption[0].value},  Телефон: ${phone.value.length > 0 ? phone.value : 'Номер телефона не указан'},  Сообщение: ${message.value}
		`

		const endpoint = `https://api.telegram.org/botTOKEN/sendMessage?chat_id=CHAT_ID&parse_mode=html&text=${data}`

		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'charset=utf-8',
			},
		}

		const response = await fetch(endpoint, options)

		const result = await response.json()

		if (result.ok) {
			setSubmit(true)
		}

		setTimeout(() => {
			setSubmit(false)
		}, 4000)
	}

	const customStyles = {
		option: (provided, state) => ({
			...provided,
			borderBottom: '1px solid white',
			color: state.isSelected ? 'black' : 'grey',
			padding: 15,
			backgroundColor: 'white',
		}),
		control: () => ({
			maxWidth: 600,
			border: '1px solid white',
			backgroundColor: 'white',
			borderRadius: 3,
			display: 'flex',
			padding: '14px 0'
		}),
		singleValue: (provided, state) => {
			const opacity = state.isDisabled ? 0.5 : 1;
			const transition = 'opacity 300ms';
			return {...provided, opacity, transition};
		}
	}

	return (
		<FormStyle>
			<FormBody action="components/blocks/Form"
					  onSubmit={handleSubmit}
			>
				<FormInputWrapper {...props}>
					<FormTextError {...props}
								   primary={(name.isEmpty && name.isDirty) && 'primary'}>{name.isEmptyError}</FormTextError>

					<FormTextError {...props}
								   primary={(name.isEmpty && name.minLength && name.isDirty) && 'primary'}>
						{name.minLengthError}
					</FormTextError>


					<FormTextError {...props}
								   primary={(name.maxLength) && 'primary'}>{name.maxLengthError}</FormTextError>


					<FormTextError {...props}
								   primary={(name.nameError) && 'primary'}>{name.nameValidError}</FormTextError>
					<FormInput value={name.value}
							   onBlur={e => name.onBlur(e)}
							   onChange={e => name.onChange(e)}
							   className={(name.isDirty && name.isEmpty) ? 'form__textInputError' : 'form__textInput'}
							   name='name'
							   type="text"
							   placeholder='Ваше имя'
					/>
				</FormInputWrapper>


				<FormInputWrapper {...props}>
					{(email.isEmpty && email.isDirty) &&
						<FormTextError {...props}>{email.isEmptyError}</FormTextError>}

					{(email.isEmpty && email.minLength && email.isDirty) &&
						<FormTextError {...props}>{email.minLengthError}</FormTextError>}

					{(email.maxLength) &&
						<FormTextError {...props}>{email.maxLengthError}</FormTextError>}

					{(email.emailError && email.isDirty) &&
						<FormTextError {...props}>{email.emailValidError}</FormTextError>}
					<FormInput value={email.value}
							   onBlur={e => email.onBlur(e)}
							   onChange={e => email.onChange(e)}
							   className={(email.isDirty && email.isEmpty) ? 'form__textInputError' : 'form__textInput'}
							   name='email'
							   type="text"
							   placeholder='Email'
					/>
				</FormInputWrapper>

				<FormInputWrapper {...props} primary>
					<FormCheckboxWrapper {...props}>
						<FormCheckbox
							id={'phone'}
							type={'checkbox'}
							checked={hasPhone}
							onChange={e => phoneHandle(e)}
							{...props}
						/>
						<FormLabel htmlFor={'phone'} {...props}>Оставить номер телефона</FormLabel>
					</FormCheckboxWrapper>


					<FormInputCheckbox {...props} primary={hasPhone && "primary"}>
						<FormTextError {...props}
									   primary={(phone.isEmpty && phone.isDirty) && 'primary'}>{phone.isEmptyError}</FormTextError>

						<FormTextError {...props}
									   primary={(phone.isEmpty && phone.minLength && phone.isDirty) && 'primary'}>{phone.minLengthError}</FormTextError>

						<FormTextError {...props}
									   primary={(phone.maxLength) && 'primary'}>{phone.maxLengthError}</FormTextError>

						<FormTextError {...props}
									   primary={(phone.phoneError && phone.isDirty) && 'primary'}>{phone.phoneValidError}</FormTextError>

						<FormInput value={phone.value}
								   onBlur={e => phone.onBlur(e)}
								   onChange={e => phone.onChange(e)}
								   className={(phone.isDirty && phone.isEmpty) ? 'form__textInputError' : 'form__textInput'}
								   name='phone'
								   type="text"
								   placeholder='Ваш телефон'
						/>
					</FormInputCheckbox>

				</FormInputWrapper>

				<FormInputWrapper {...props}>
					<FormSelect {...props}>
						<Select styles={customStyles} defaultValue={servicesOption[0]} options={servicesOption}
								instanceId
								onChange={handleSelectChange}/>
					</FormSelect>
				</FormInputWrapper>

				<FormInputWrapper {...props}>

					<FormTextError {...props}
								   primary={(message.maxLength) && 'primary'}>{message.maxLengthError}</FormTextError>

					<FormTextarea {...props}
								  name='message'
								  id="1"
								  className={(message.isDirty && message.isEmpty) ? 'form__textInputError' : 'form__textInput'}
								  onBlur={e => message.onBlur(e)}
								  onChange={e => message.onChange(e)}
								  placeholder="Ваше сообщение"
								  value={message.value}
					/>
				</FormInputWrapper>

				<FormBtn {...props}
						 disabled={!name.inputValid || !email.inputValid || (hasPhone && !phone.inputValid)}
						 type='submit'
						 onClick={() => clearLocalStorage()}
				>Оставить заявку</FormBtn>
			</FormBody>

			{
				<Success {...props} primary={submit && 'primary'}>Спасибо за оставленную заявку!</Success>
			}
		</FormStyle>
	);
};

export default ServicesForm;