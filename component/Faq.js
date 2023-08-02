import { useRef, useState } from "react"

const FaqsCard = (props) => {

    const answerElRef = useRef()
    const [state, setState] = useState(false)
    const [answerH, setAnswerH] = useState('0px')
    const { faqsList, idx } = props

    const handleOpenAnswer = () => {
        const answerElH = answerElRef.current.childNodes[0].offsetHeight
        setState(!state)
        setAnswerH(`${answerElH + 20}px`)
    }

    return (
        <div
            className="space-y-3 mt-5 overflow-hidden border-b"
            key={idx}
            onClick={handleOpenAnswer}
        >
            <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg font-medium">
                {faqsList.q}
                {
                    state ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5  ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5  ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    )
                }
            </h4>
            <div
                ref={answerElRef} className="duration-300"
                style={state ? { height: answerH } : { height: '0px' }}
            >
                <div>
                    <p className=''>
                        {faqsList.a}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default () => {

    const faqsList = [
        {
            q: "What services does Chase offer for real estate website development?",
            a: "Chase specializes in creating custom real estate websites that are tailored to your business needs. We offer design, development, search engine optimization, and ongoing support."
        },
        {
            q: "How long does it take to develop a real estate website with Chase?",
            a: "The timeframe for developing a real estate website depends on the complexity and specific requirements. Typically, the process takes between 3 to 6 weeks from design to launch."
        },
        {
            q: " What features can Chase include to improve user experience on our real estate website?",
            a: "Chase can implement various features like advanced property search, MLS integration, interactive property maps, virtual tours, mortgage calculators, and lead generation forms to enhance user experience and engage potential clients."
        },
        {
            q: " How does Chase approach search engine optimization (SEO) for real estate websites?",
            a: "Chase employs proven SEO strategies, including optimized property descriptions, meta tags, page speed optimization, and local SEO techniques, to increase your website's visibility in search engine results and attract organic traffic."
        },
        {
            q: "Does Chase provide ongoing support and maintenance after the website launch?",
            a: "Absolutely! Chase offers comprehensive support and maintenance packages to ensure your real estate website remains secure, up-to-date, and runs smoothly post-launch."
        }
    ]

    return (
        <section className="leading-relaxed faq max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
            <div className="space-y-3 text-center">
                <p className='qustion_header'>Your burning Questions</p>
                <p className='qustion_header'>Answered</p>

            </div>
            <div className="mt-14 max-w-2xl mx-auto">
                {
                    faqsList.map((item, idx) => (
                        <FaqsCard
                            idx={idx}
                            faqsList={item}
                        />
                    ))
                }
            </div>
            <div className="mt-16 mb-16">
                <p className='more text-center mt-14'>Not what you are looking for ?</p>
                <p className='book_Call cursor-pointer text-center mb-10'>Chat with us</p>
            </div>
        </section>
    )
}