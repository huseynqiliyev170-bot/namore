"use client";

import Link from "next/link";
import { useCallback } from "react";
import { usePathname, useSearchParams } from 'next/navigation';

const Pagination = ({ total, limit, currentPage }) => {
    const totalPages = Math.ceil(total / limit);
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const hasMorePage = () => {
        const recievedPostsCount = limit * currentPage;
        return recievedPostsCount < total;
    };

    const createQueryString = useCallback(
        (name, value) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)
        
            return params.toString()
        },
        [searchParams]
    );

    return (
        <div className="mil-pagination">
            {(currentPage >= 2) &&
            <Link href={pathname + '?' + createQueryString( 'page', currentPage - 1 )} className="mil-page-dot">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </Link>
            }
            
            {total > limit &&
            <>
                {Array.from(Array(totalPages), (_, i) => i + 1).map((page) => (
                <Link href={pathname + '?' + createQueryString( 'page', page )} className={page === currentPage ? "mil-page-dot mil-active": "mil-page-dot"} key={page}>{page}</Link>
                ))}
            </>
            }

            {hasMorePage() &&
            <Link href={pathname + '?' + createQueryString( 'page', currentPage + 1 )} className="mil-page-dot">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </Link>
            }
        </div>
    );
};
export default Pagination;