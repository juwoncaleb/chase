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
        <div className="div">
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
        </div>
       
    )
}

export default () => {

    const faqsList = [
         {
            q: "How do you actually help interior designers grow?",
            a: "We help you get in front of the right people — fast. From running smart ads that bring in quality leads, to securing strategic referrals from realtors and developers, we plug you into a system that gets you seen, booked, and paid."
        },
        {
            q: " What do you mean by collaborating with realtors or developers?",
            a: "We introduce you to realtors and property developers who are already working with high-net-worth clients. These professionals often need trusted designers to refer—and we make sure your name is the one they remember."
        },
       
        {
            q: " Why should I work with you instead of hiring a marketing person or building a team in-house?",
            a: "Hiring in-house sounds smart — until you realize you’re paying full-time for someone who likely doesn’t have the strategy, systems, or network to actually bring in high-end clients. With us, you get a full team: ads, strategy, partnerships, and positioning — all tailored to interior designers. No training, no guessing, no wasted salary. Just a proven system that gets results faster, for less."
        },
        {
            q: "How long before I see results?",
            a: "Some designers get inquiries in the first week — especially through our realtor network. For ads and full campaigns, most see momentum within 2–4 weeks. But we're not here for short-term spikes; we're building long-term growth."
        },
        {
            q: "What kind of designers do you usually work with?",
            a: "We work best with interior designers who are serious about growth — whether you're just starting or already booked but ready to scale. If your work is excellent but your leads are inconsistent, we’re for you."
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