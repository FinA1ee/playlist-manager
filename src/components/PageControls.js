import React, { useEffect, useState } from 'react';

// props: 
// 1. # of pages
// 2. # of page to display
const PageControls = (props) => {

    const { pageCount, currentPage, onNextPage } = props;
    const [pageButtons, setPageButtons] = useState([]);

    useEffect(() => {
        console.log("Page Control Reloaded");
        generateButtons(currentPage);
    }, [currentPage]);

    const generateButtons = (currentPage) => {
        console.log("Current Page: ", currentPage);
        let buttonArr = [];
        for( let i = 0; i < pageCount; i++){
            if ( i + 1 === currentPage ) {
                buttonArr.push(<button className="me-2" style={{backgroundColor: "red"}}>{i+1}</button>)
            } else {
                buttonArr.push(<button className="me-2">{i+1}</button>)
            }
        }
        setPageButtons(buttonArr);
    }


    return (
        <div className="m-5">
            {pageButtons}
            <button onClick={onNextPage}> {pageCount !== currentPage ? "Next Page" : "Back to First" }</button>
        </div>
    )
}

export default PageControls;