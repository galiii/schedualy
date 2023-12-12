import Link from "next/link";

export default function SchedulePage() {
    return (
        <main>
            <h1>Schedule page</h1>
            <p><Link href="/company/schedule/calender">calender</Link></p>
            <p><Link href="/company/schedule/days">days</Link></p>
        </main>
    )
}
