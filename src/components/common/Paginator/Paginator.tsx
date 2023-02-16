import React, {FC, useState} from 'react';
import style from "./Paginator.module.css";
import cn from 'classnames'
import {Button} from "@mui/material";

type PropsUsersType = {
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    onPageChange: (page: number) => void
    portionSize: number
   }

export const Paginator: FC<PropsUsersType> = ({totalUsersCount,pageSize,currentPage,onPageChange , portionSize = 10}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let totalPages = [];
    for (let i = 1; i <= pagesCount; i++) {
        totalPages.push(i);
    }
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber , setPortionNumber] = useState(1)
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionNumber = portionNumber * portionSize;

    return (
            <div className={style.paginator}>
                {portionNumber > 1 &&
                <Button onClick={()=> {setPortionNumber(portionNumber-1)}}>Prev</Button>}
                {totalPages
                    .filter(page => page >= leftPortionNumber && page <= rightPortionNumber)
                    .map(page => {
                    return (
                        <span className={cn({
                            [style.selectedPage] : currentPage === page
                        },style.pageNumber)}
                              key={page}
                              onClick={(e) => {
                                      onPageChange(page)
                                  }}> {page} </span>
                    )
                })}
                { portionCount > portionNumber &&
                    <Button onClick={()=>{ setPortionNumber(portionNumber+1)} }>NEXT</Button>
                }
            </div>
    );
};

