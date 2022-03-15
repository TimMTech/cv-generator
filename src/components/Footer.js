import { format } from 'date-fns'

const Footer = () => {

    const today = format(new Date(), 'MM/dd/yyyy')

    return (
        <footer className="footer-container">
            <h3 className="footer-caption">Copyright &copy; Tim Mukhamedov {today} </h3>
        </footer>
    )
}

export default Footer