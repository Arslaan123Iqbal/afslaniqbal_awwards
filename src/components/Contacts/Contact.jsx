import styles from './styles.module.scss'
import SectionTitle from '@/common/SectionTitle'
import Image from 'next/image'
import React from 'react'
import Typewriter from 'typewriter-effect';


const conatctList = [
    {
        name: "https://wa.me/+923164547382",
        image: "/contacts/whatsapp.png",
        show:"+923164547382"
    },
    {
        name: "tel:+923065422488",
        image: "/contacts/phone.png",
        show:"+923065422488"
    },
    {
        name: "https://www.linkedin.com/in/arslan-iqbal-7989961a0/",
        image: "/contacts/linkedin.png"
    },
    {
        name: "https://github.com/Arslaan123Iqbal",
        image: "/contacts/github.png"
    },
    {
        name: "mailto:arslaniqbalmgt@gmail.com",
        image: "/contacts/email.png",
        show:"arslaniqbalmgt@gmail.com"
    },
    {
        name: "https://medium.com/@arslaniqbalmgt",
        image: "/contacts/medium.png"
    }
]

const Contact = () => {
    return (
        <div id="contacts" className="w-full overflow-hidden-web flex justify-center mt-20">
            <div className="w-full min-h-[800px] flex flex-col xl:w-[70%]">
                <div className="w-full">
                    <SectionTitle title="CONTACTS" subtitle="WHERE DO YOU FIND ME" />
                </div>
                <div>

                    <div className={styles.search_main}>

                        <Typewriter
                            options={{
                                strings: ['Arslan Iqbal'],
                                autoStart: true,
                                loop: true,
                            }}
                        />

                        <div>
                            <Image src={'/close.png'} width={50} height={50} />
                            <Image src={'/search.png'} width={50} height={50} />
                        </div>
                    </div>
                    <div className={styles.contactList}>
                        {
                            conatctList.map((contact, i) =>
                                <a href={contact.name} target='_blank' key={`${i}`} className={styles.links_search}>
                                    <Image className={styles.contactImage} src={contact.image} width={50} height={50} alt={`${i}`} />
                                    <p>{contact.show ? contact.show : contact.name}</p>
                                </a>)
                        }
                    </div>

                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact