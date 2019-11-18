import Link from 'next/link';
import NavStyles from '../components/styles/NavStyles';
const Navbar = () => (
    <NavStyles>
        <Link href="/newDivision">
            <a >New Division</a>
        </Link>
        <Link href="/candidatePage">
            <a >Candidates</a>
        </Link>
        <Link href="/newCand">
            <a>New Candidate</a>
        </Link>
        <Link href="/newRegion">
            <a >New Region</a>
        </Link>
        <Link href="/newGender">
            <a >Gender</a>
        </Link>
        <Link href="/displayRegionList">
            <a>Region</a>
        </Link>
        <Link href="/displayDivisions">
            <a>Division</a>
        </Link>
        <Link href="/divisionPage">
            <a >Div</a>
        </Link>

        <Link href="/admin">
            <a >
                Admin</a>
        </Link>
        <Link href="/center">
            <a >
                Center</a>
        </Link>
        <Link href="/appTool">
            <a >
                Home</a>
        </Link>

    </NavStyles>
);

export default Navbar;