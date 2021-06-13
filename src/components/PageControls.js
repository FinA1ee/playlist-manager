import React, { useEffect, useState } from 'react';

// props: 
// 1. # of pages
// 2. # of page to display
const PageControls = (props) => {

    const { pageCount, currentPage, onNextPage, onPrevPage } = props;
    const [pageButtons, setPageButtons] = useState([]);

    useEffect(() => {
        console.log("Page Control Reloaded");
        generateButtons(pageCount, currentPage);
    }, [pageCount, currentPage]);

    const generateButtons = (pageCount, currentPage) => {
        console.log("Current Page: ", currentPage);
        console.log("Page Count: ", pageCount);
        let buttonArr = [];
        for( let i = 0; i < pageCount; i++){
            if ( i + 1 === currentPage ) {
                buttonArr.push(<button key={i} className="me-2 mx-2" style={{backgroundColor: "red"}}>{i+1}</button>)
            } else {
                buttonArr.push(<button key={i} className="me-2 mx-2">{i+1}</button>)
            }
        }
        setPageButtons(buttonArr);
    }


    return (
        <div className="m-5">
            <button onClick={onPrevPage}> {"上一页"} </button>
            {pageButtons}
            <button onClick={onNextPage}> {"下一页"}</button>
        </div>
    )
}

export default PageControls;