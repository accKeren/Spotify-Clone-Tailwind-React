import Section from "components/Section";

function Home(){

    const items = [
        {
            id: 1,
            title: 'Miss The Rage',
            description: 'Trippie Redd',
            image: 'https://i.scdn.co/image/ab67616d00001e02d01b8867ca76ba7a4c15a9a4',
            type: 'album'
        },
        {
            id: 2,
            title: 'Gurbet',
            description: 'Özdemir Erdoğan',
            image: 'https://i.scdn.co/image/ab67616d00001e02f0e41bd269bd8f48bdb3a677',
            type: 'album'

        },
        {
            id: 3,
            title: 'Ball Without You',
            description: '21 Savage',
            image: 'https://i.scdn.co/image/ab67616d00001e02ca29f023b5d11f85de854f1b',
            type: 'album'
        },
        {
            id: 4,
            title: 'Khontkar',
            description: 'Sanatçı',
            image: 'https://i.scdn.co/image/ab6761610000f178a5e5fddb383b6df0655eddfd',
            type: 'artist'
        },
        {
            id: 5,
            title: 'Reddit Zone',
            description: 'Rekkitz',
            image: 'https://i.scdn.co/image/7960f21c34a9ca8d34ab403def177f62f983a0ae',
            type: 'podcast'
        }
]

    return (

       <div className="grid gap-y-8 ">
        <Section
			title="Yakında Çalınanlar"
			more="/blabla"
            items = {items}
        />
        <Section
			title="Hip Hop"
			more="/blabla"
            items = {items}
        />
        <Section
			title="Çalma Listelerin"
			more="/blabla"
            items = {items}
        />        
       </div>

       
    )
}
export default Home