import React from "react";
import {
    CustomPagination,
    CustomPaginationContent,
    CustomPaginationItem,
    CustomPaginationPrevious,
    CustomPaginationLink,
    CustomPaginationNext,
} from "../custom/c_pagination";
import { Pagination } from "@/types/types";

type PaginationProps = {
    pagination: Pagination | null;
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
};

function PaginationComponent({ pagination, page, setPage }: PaginationProps) {
    const onNextClick = () => {
        setPage(page + 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const onPreviousClick = () => {
        setPage(page - 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <CustomPagination className="mt-12 font-header">
            <CustomPaginationContent>
                {/* previous button  */}
                <CustomPaginationItem>
                    <CustomPaginationPrevious onClick={onPreviousClick} />
                </CustomPaginationItem>

                {/* previous number  */}
                {pagination?.current_page &&
                pagination?.current_page - 1 > 0 ? (
                    <CustomPaginationItem>
                        <CustomPaginationLink onClick={onPreviousClick}>
                            {pagination?.current_page - 1}
                        </CustomPaginationLink>
                    </CustomPaginationItem>
                ) : (
                    <> </>
                )}
                {/* current number  */}
                <CustomPaginationItem>
                    <CustomPaginationLink href="#" isActive>
                        {pagination?.current_page}
                    </CustomPaginationLink>
                </CustomPaginationItem>
                {/* next number  */}
                {pagination?.current_page &&
                pagination?.current_page + 1 < pagination?.total_pages ? (
                    <CustomPaginationItem>
                        <CustomPaginationLink onClick={onNextClick}>
                            {pagination.current_page + 1}
                        </CustomPaginationLink>
                    </CustomPaginationItem>
                ) : (
                    <> </>
                )}
                {/* next button  */}
                <CustomPaginationItem>
                    <CustomPaginationNext onClick={onNextClick} />
                </CustomPaginationItem>
            </CustomPaginationContent>
        </CustomPagination>
    );
}

export default PaginationComponent;
