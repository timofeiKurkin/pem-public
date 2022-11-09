import parsePhoneNumberFromString from "libphonenumber-js";

const UsePhoneValidate = (value) => {
	const phoneNumber = parsePhoneNumberFromString(value)
	if (!phoneNumber) {
		return value
	}

	return (
		phoneNumber.formatInternational()
	);
};

export default UsePhoneValidate;