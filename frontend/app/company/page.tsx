import Link from "next/link";


export default function CompanyPage() {
    return (
        <main>
            <h1>Company page</h1>
            <p><Link href="/company/employee">employee</Link></p>
            <p><Link href="/company/schedule">schedule</Link></p>
        </main>
    )
}
