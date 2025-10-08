"use client";
import { CustomButton } from "@/components/custom/c_button";
import { LoadingSpinner } from "@/components/custom/c_loading-spinner";
import {
    CustomPagination,
    CustomPaginationContent,
    CustomPaginationItem,
    CustomPaginationPrevious,
    CustomPaginationLink,
    CustomPaginationNext,
} from "@/components/custom/c_pagination";
import { H1Custom } from "@/components/typeography/custom";
import { getAllOrgs } from "@/lib/pet-api";
import { Org, Pagination, TOrgsFetch } from "@/types/types";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Page() {
    const [orgs, setOrgs] = useState<Org[] | null>(null);
    const [pagination, setPagination] = useState<Pagination | null>(null);
    const [page, setPage] = useState(1);

    const onNextClick = () => {
        setPage(page + 1);
    };

    const onPreviousClick = () => {
        setPage(page - 1);
    };

    useEffect(() => {
        async function getOrgs() {
            await getAllOrgs(page).then((data: TOrgsFetch) => {
                setOrgs(data.organizations);
                setPagination(data.pagination);
            });
        }

        getOrgs();
    }, [page]);

    return (
        <div className="client-page">
            <div className="mt-4">
                <H1Custom className="text-center">
                    Shelters and Organizations
                </H1Custom>
            </div>

            <div className="flex flex-col gap-4 mt-8">
                {orgs === null ? (
                    <LoadingSpinner />
                ) : (
                    <ul className="grid grid-cols-2 justify-center items-center gap-4 max-w-[1100px] mx-auto">
                        {orgs.map((org) => (
                            <li key={org.id} className="mx-auto">
                                <CustomButton asChild>
                                    <Link href={`/orgs/org/${org.id}`}>
                                        {org.name}
                                    </Link>
                                </CustomButton>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {pagination === null ? (
                <></>
            ) : (
                <CustomPagination className="mt-12 font-header">
                    <CustomPaginationContent>
                        {/* previous button  */}
                        <CustomPaginationItem>
                            <CustomPaginationPrevious
                                onClick={onPreviousClick}
                            />
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
                        pagination?.current_page + 1 <
                            pagination?.total_pages ? (
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
            )}
        </div>
    );
}

export default Page;
