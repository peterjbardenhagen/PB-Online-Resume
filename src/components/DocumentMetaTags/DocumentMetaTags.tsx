interface DocumentMetaTagsProps {
    twitterId?: string
    image?: string
    language?: string
}

export const DocumentMetaTags = ({
    twitterId,
    image,
    language,
}: DocumentMetaTagsProps) => (
    <>
        <link rel="manifest" href="/manifest.json" />

        {twitterId && <meta name="twitter:site" content={twitterId} />}

        {image && (
            <>
                <meta property="og:image" content={image} />
                <meta name="twitter:image:src" content={image} />
            </>
        )}

        {language && <meta httpEquiv="Content-Language" content={language} />}
    </>
)