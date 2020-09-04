import React from 'react';
import './App.css';

class Left extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ["Anderson", "Ashwoon", "Aikin", "Bateman", "Bongard", "Bowers", "Boyd",
                "Cannon", "Cast", "Deitz", "Dewalt", "Ebner", "Frick", "Hancock", "Haworth",
                "Hesch", "Hoffman", "Kassing", "Knutson", "Lawless", "Lawicki", "Mccord", "McCormack",
                "Miller", "Myers", "Nugent", "Ortiz", "Orwig", "Ory", "Paiser", "Pak", "Pettigrew",
                "Quinn", "Quizoz", "Ramachandran", "Resnick", "Sagar", "Schickowski", "Schiebel",
                "Sellon", "Severson", "Shaffer", "Solberg", "Soloman", "Sonderling", "Soukup",
                "Soulis", "Stahl", "Sweeney", "Tandy", "Trebil", "Trusela", "Trussel", "Turco",
                "Uddin", "Uflan", "Ulrich", "Upson", "Vader", "Vail", "Valente", "Van Zandt",
                "Vanderpoel", "Ventotla", "Vogal", "Wagle", "Wagner", "Wakefield", "Weinstein",
                "Weiss", "Woo", "Yang", "Yates", "Yocum", "Zeaser", "Zeller", "Ziegler", "Bauer",
                "Baxster", "Casal", "Cataldi", "Caswell", "Celedon", "Chambers", "Chapman",
                "Christensen", "Darnell", "Davidson", "Davis", "DeLorenzo", "Dinkins", "Doran",
                "Dugelman", "Dugan", "Duffman", "Eastman", "Ferro", "Ferry", "Fletcher", "Fietzer", "Hylan",
                "Hydinger", "Illingsworth", "Ingram", "Irwin", "Jagtap", "Jenson", "Johnson", "Johnsen", "Jones",
                "Jurgenson", "Kalleg", "Kaskel", "Keller", "Leisinger", "LePage"]
        }
        this.setRef = this.setRef.bind(this)
        this.getIndex = this.getIndex.bind(this)
        this.toggleHover = this.toggleHover.bind(this)
    }

    getIndex(ref) {
       return this.props.leftRef.findIndex(ele => ele === ref)
    }
    setRef(ref) {
        if (ref !== null) {
            this.props.setRef(ref,"leftId")
            ref.onmouseenter = () => {
                this.toggleHover(ref,'enter')
            }
            ref.onmouseleave = () => {
                this.toggleHover(ref,'leave')
            }
        }
    }

    toggleHover(leftRef,key){
        if(key === 'enter'){
        leftRef.className='hover'
        let index = this.getIndex(leftRef)
        this.props.rightRef[index].className="hover"
        }
        else{
            leftRef.className=''
            let index = this.getIndex(leftRef)
            this.props.rightRef[index].className=""
        }
    }

    render() {
        const cellStyle = { minWidth: 200, padding: '.5em 1em', textAlign: 'left', borderLeft: '1px solid white', borderBottom: '1px solid white' };
        return (
            <React.Fragment >
                { this.state.name.map((item, key) => (
                     (<tr ref={this.setRef} key={key} >
                        <td style={cellStyle} >{item}</td>
                    </tr>)
                ))}
            </React.Fragment>
        );
    }
}

export default Left;
