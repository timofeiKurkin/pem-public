import {
	ProjectGuide,
	ProjectItem, ProjectItemContent, ProjectItemOption,
	ProjectItems,
	ProjectItemTitle, ProjectItemTitleLine, ProjectItemTitleWrapper,
	ProjectItemWrapper, ProjectItemYear,
	ProjectMain, ProjectPagination, ProjectSearch, ProjectTitle
} from "../../styles/projectPage/ProjectSectionStyle";
import Title from "../blocks/Title";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {setLoading, setPage} from "../../store/reducers/projectSlice";
import React, {useEffect, useState} from "react";
import ReactPaginate from "react-paginate";

const ProjectSection = ({props}) => {

	const {project, limit, page} = useAppSelector(state => state.projectReducer)
	const dispatch = useAppDispatch()

	const [filter, setFilter] = useState('')

	const [currentItems, setCurrentItems] = useState(project)
	const [itemOffset, setItemOffset] = useState(0)
	const [activePage, setActivePage] = useState(1)

	const [loaded, setLoaded] = useState(false)

	const filterProject = project.filter(proj => {
		return proj.title.toLowerCase().includes(filter.toLowerCase()) || proj.year.toString().includes(filter);
	})

	const handleInput = (e) => {
		setFilter(e.target.value)
		setLoaded(false)
	}

	const handlePageClick = (event) => {
		const newOffset = event.selected * limit % filterProject.length
		setItemOffset(newOffset)
		setLoaded(false)
	}

	useEffect(() => {
		if (loaded) return
		const endOffset = itemOffset + limit
		setCurrentItems(filterProject.slice(itemOffset, endOffset))
		setLoaded(true)
	}, [filterProject, itemOffset, limit, loaded, project])

	useEffect(() => {
		dispatch(setPage(Math.ceil(filterProject.length / limit)))
		dispatch(setLoading(true))
	}, [dispatch, filterProject, limit])

	return (
		<ProjectMain {...props}>
			<ProjectTitle>
				<Title>Проекты</Title>
			</ProjectTitle>

			<ProjectGuide {...props}>
				<ProjectSearch
					{...props}
					value={filter}
					onChange={handleInput}
					placeholder={'Введите название проекта или год...'}
				/>
				<ProjectPagination {...props}>
					<ReactPaginate
						containerClassName={'root'}
						breakLabel=". . ."
						nextLabel=">"
						onPageChange={handlePageClick}
						pageRangeDisplayed={3}
						marginPagesDisplayed={1}
						pageCount={page}
						previousLabel="<"
						renderOnZeroPageCount={null}
					/>
				</ProjectPagination>
			</ProjectGuide>


			<ProjectItems {...props}>
				{
					currentItems.length > 0 ?
						currentItems.map((proj) =>
							<ProjectItem key={proj.id} {...props}>

								<ProjectItemContent {...props}>
									<ProjectItemTitleWrapper {...props}>
										<ProjectItemTitle {...props}>
											{proj.title}
										</ProjectItemTitle>
										<ProjectItemTitleLine {...props}></ProjectItemTitleLine>
									</ProjectItemTitleWrapper>
									<ProjectItemWrapper {...props}>
										{proj.descriptionProj.map(({id, text}) =>
											<ProjectItemOption key={id} {...props}>
												{text}
											</ProjectItemOption>
										)}
									</ProjectItemWrapper>
								</ProjectItemContent>

								<ProjectItemYear {...props}>
									{proj.year}
								</ProjectItemYear>
							</ProjectItem>
						)
						:
						<div>
							Ничего не найдено
						</div>
				}
			</ProjectItems>
		</ProjectMain>
	);
};

export default ProjectSection;