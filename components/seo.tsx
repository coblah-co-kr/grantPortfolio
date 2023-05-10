import Head from "next/head";

interface SeoObjects {
    subtitle : string
}

export default function Seo({ subtitle } : SeoObjects) {
    const fullTitle = subtitle
    ? ` Portfolio | ${subtitle}`
    : "Portfolio";
    return (
        <Head>
            <title>{fullTitle}</title>
        </Head>
    )
}