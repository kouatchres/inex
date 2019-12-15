import Link from "next/link";
import NavStyles from "../components/styles/NavStyles";
const Navbar = () => (
  <NavStyles>
    <Link href="/newDivision">
      <a>Division</a>
    </Link>
    <Link href="/candidatePage">
      <a>Cands</a>
    </Link>
    <Link href="/newCand">
      <a>Cand</a>
    </Link>
    <Link href="/newRegion">
      <a>Region</a>
    </Link>
    <Link href="/newGender">
      <a>Gender</a>
    </Link>
    <Link href="/displayRegionList">
      <a>Regions</a>
    </Link>
    <Link href="/newSubDivision">
      <a>SubDivision</a>
    </Link>
    <Link href="/newTown">
      <a>Town</a>
    </Link>

    <Link href="/newRank">
      <a>Rank</a>
    </Link>
    <Link href="/newCenter">
      <a>Center</a>
    </Link>
    <Link href="/newSubject">
      <a>Subject</a>
    </Link>
    <Link href="/newSession">
      <a>Session</a>
    </Link>
    <Link href="/newExam">
      <a>Exam</a>
    </Link>
    <Link href="/newSeries">
      <a>Series</a>
    </Link>
    <Link href="/newEducType">
      <a>Education</a>
    </Link>
    <Link href="/newRegister">
      <a>Register</a>
    </Link>
  </NavStyles>
);

export default Navbar;
