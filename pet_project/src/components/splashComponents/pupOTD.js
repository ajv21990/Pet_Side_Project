import React from 'react';

let Steves = 'https://scontent-sjc3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/100478924_346507846328490_7073522550531580278_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_cat=106&_nc_ohc=RJEuyKUow3cAX9LbhxV&oh=790bce39a21efd0e5886d7e3ca85ee42&oe=5F0702FD'
export default class PupOTD extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //     }
    // }
    render() {
        return (
            <div>
                <h1>Pup Of the Day</h1>
                <img src={Steves} alt="Pup Of The Day" width="400px" style={{ marginTop: "5%", padding: "10px" }} />
                <p className="pl-2 pr-2" style={{ marginTop: "10%" }}>This text is about a pup of the day. The current pup of the day is Stevie the menace. Stevie is like a sour patch. First she is sour and then she is sweet. Stevie likes to bite and occasionaly likes head pats</p>
            </div>
        )
    }
}