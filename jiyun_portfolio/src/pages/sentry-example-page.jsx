import Head from "next/head";
import * as Sentry from "@sentry/nextjs";
export default function SentryExamplePage() {
    return (
        <div>
            <h1>Sentry Example Page</h1>
            <p>This is a test page for Sentry integration.</p>
        </div>
    );
}
