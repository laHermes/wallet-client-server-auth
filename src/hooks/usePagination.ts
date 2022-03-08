import { useCallback, useEffect, useState } from 'react';

interface IUsePagination {
	data: any;
	itemsPerPage: number;
	pageLimit: number;
}

const usePagination = ({ data, itemsPerPage, pageLimit }: IUsePagination) => {
	const [paginatedData, setPaginatedData] = useState<any>();
	const [currentPage, setCurrentPage] = useState<any>(1);
	const [paginationGroup, setPaginationGroup] = useState<Array<any>>([]);

	// calculate total pages
	const [totalPages, setTotalPages] = useState<any>(
		Math.ceil(data.length / itemsPerPage)
	);

	// useEffect(() => {
	// 	setTotalPages(Math.ceil(data.length / itemsPerPage));
	// }, [itemsPerPage, data]);

	useEffect(() => {
		// calculate first index of data array to determine position
		const beginningIndex = (currentPage - 1) * itemsPerPage;
		// calculate ending index of data array to determine index
		const endingIndex = beginningIndex + itemsPerPage;

		// calculate total pages
		setTotalPages(Math.ceil(data.length / itemsPerPage));

		// get sliced (paginated) data
		setPaginatedData(data.slice(beginningIndex, endingIndex));
	}, [currentPage, itemsPerPage, data, pageLimit, totalPages]);

	useEffect(() => {
		// generates list of numbers for navigation
		const start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
		const PaginationArray = new Array(totalPages)
			.fill(null)
			.map((_, id) => start + id + 1);
		setPaginationGroup(PaginationArray);
	}, [pageLimit, data, totalPages]);

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
