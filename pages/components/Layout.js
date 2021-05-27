const grid = {
    position: "fixed",
    display: "grid",
    gridTemplateColumns: "repeat(6, 1fr)",
    gridTemplateRows: "0.5fr 1.5fr 1fr 1.5fr 0.5fr",
    gap: "0px 0px"
}

const product = {
    gridArea:"2 / 2 / 6 / 5"
}


export const Layout = ({children}) => {

    return (
        <grid>
            {children}
        </grid>
    )
}

export default Layout;