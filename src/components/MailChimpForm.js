import React from 'react'
import MailChimpSubscribe from 'react-mailchimp-subscribe'
import NewsLetter from './NewsLetter';

const MailChimpForm = () => {
    const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;
    return (
        <>
            <MailChimpSubscribe
                url={postUrl}
                render={({ subscribe, status, message }) => (
                    <NewsLetter
                        status={status}
                        message={message}
                        onValiated={formData => subscribe(formData)}
                    />
                )}
            />
        </>
    )
}

export default MailChimpForm
