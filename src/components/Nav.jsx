import Link from 'next/link';
import NavStyles from '../components/styles/NavStyles';
const Navbar = () => (
    <NavStyles>
        <Link href="/newDivision">
            <a >New Division</a>
        </Link>
        <Link href="/CandDisplay">
            <a >Candidates</a>
        </Link>
        <Link href="/newCand">
            <a>New Candidate</a>
        </Link>
        <Link href="/newRegion">
            <a >New Region</a>
        </Link>
        <Link href="/candidatePage">
            <a >Candidate</a>
        </Link>
        <Link href="/regionPage">
            <a>Region</a>
        </Link>
        <Link href="/townPage">
            <a >Town</a>
        </Link>

        <Link href="/admin">
            <a >
                Admin</a>
        </Link>
        <Link href="/gender">
            <a >
                Gender</a>
        </Link>
        <Link href="/board">
            <a >
                Board</a>
        </Link>

    </NavStyles>
);

export default Navbar;