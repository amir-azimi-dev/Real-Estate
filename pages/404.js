import React from 'react'

function NotFound() {
    return (
        <>
            <h1>متاسفانه صفحه‌ی مورد نظر یافت نشد.</h1>

            <style jsx>{`
            h1 {
                grid-column: 2 / 12;
                text-align: center;
                margin: 5rem 1rem;
                padding: 1rem;
                background-color: #cdcdcd;
            }
            `}</style>
        </>
    )
}

export default NotFound