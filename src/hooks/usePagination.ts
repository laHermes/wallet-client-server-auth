import { useCallback, useEffect, useMemo, useState } from 'react';
import { IUsePagination, IPaginated } from '../types';

const usePagination = ({
	data,
	itemsPerPage,
	pageLimit,
}: IUsePagination): IPaginated => {
	const [paginatedData, setPaginatedData] = useState<any[]>([]);
	const [currentPage, setCurrentPage] = useState<number>(1);
	// const [paginationGroup, setPaginationGroup] = useState<Array<number>>([]);

	// // calculate total pages
	// const [totalPages, setTotalPages] = useState<any>(
	// 	Math.ceil(data?.length / itemsPerPage)
	// );

	// useEffect(() => {
	// 	setTotalPages(Math.ceil(data?.length / itemsPerPage));
	// }, [itemsPerPage, data]);

	const totalPages = useMemo(
		() => Math.ceil(data?.length / itemsPerPage),
		[data, itemsPerPage]
	);

	useEffect(() => {
		// calculate first index of data array to determine position
		const beginningIndex = (currentPage - 1) * itemsPerPage;
		// calculate ending index of data array to determine index
		const endingIndex = beginningIndex + itemsPerPage;

		// calculate total pages
		// setTotalPages(Math.ceil(data?.length / itemsPerPage));

		// get sliced (paginated) data
		setPaginatedData(data.slice(beginningIndex, endingIndex));
	}, [currentPage, itemsPerPage, data, pageLimit, totalPages]);

	const paginationGroup = useMemo(() => {
		if (currentPage === totalPages) {
			return;
		}
		// generates list of numbers for navigation
		const start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
		//if the user is on the last page, do not recreate list of pages for navigation
		const group = new Array(totalPages)
			.fill(null)
			.map((_, id) => Math.min(start + id + 1, totalPages));

		return group || [];
	}, [currentPage, pageLimit, totalPages]);

	// useEffect(() => {
	// 	if (currentPage === totalPages) {
	// 		return;
	// 	}
	// 	// generates list of numbers for navigation
	// 	const start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
	// 	//if the user is on the last page, do not recreate list of pages for navigation
	// 	const PaginationArray = new Array(totalPages)
	// 		.fill(null)
	// 		.map((_, id) => Math.min(start + id + 1, totalPages));

	// 	setPaginationGroup(PaginationArray);
	// }, [data, itemsPerPage, pageLimit, currentPage, totalPages]);

	useEffect(() => {
		// every time the user changes page it goes to the top of the screen
		window.scrollTo({ behavior: 'smooth', top: 0 });
	}, [currentPage]);

	const nextPage = useCallback(() => {
		// go to the next page
		setCurrentPage((page: number) => Math.min(page + 1, totalPages));
	}, [totalPages]);

	const previousPage = useCallback(() => {
		// go to the previous page
		setCurrentPage((page: number) => Math.max(page - 1, 1));
	}, []);

	function changePage(event: any) {
		// go to page N (#)
		const pageNumber = Number(event.target.textContent);
		setCurrentPage(pageNumber);
	}

	return {
		nextPage,
		previousPage,
		changePage,
		paginatedData,
		currentPage,
		totalPages,
		paginationGroup,
	};
};

export default usePagination;
