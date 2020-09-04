import React from 'react';
import './App.css';

class Right extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: [20, 21, 50, 52, 22, 23, 56,
                32, 15, 14, 30, 56, 90, 80, 70,
                33, 71, 61, 51, 51, 41, 31, 21,
                34, 22, 32, 42, 52, 61, 62, 72, 82,
                35, 23, 33, 43, 53, 63, 73,
                38, 83, 93, 24, 34, 44, 54,
                50, 64, 74, 84, 94, 15, 25, 35,
                20, 45, 55, 65, 75, 85, 16, 26,
                40, 36, 46, 56, 66, 76, 86,
                41, 96, 17, 27, 37, 47, 57, 67, 77,
                29, 87, 18, 28, 38, 48, 58,
                28, 68, 78, 88, 98, 19, 29,
                30, 39, 49, 59, 60, 69, 79, 89, 99,
                33, 20, 30, 40, 50, 60, 70, 80, 90,
                38, 12, 34, 15, 87, 44]
        }
        this.setRef = this.setRef.bind(this)
        this.getIndex = this.getIndex.bind(this)
        this.toggleHover = this.toggleHover.bind(this)
    }

    getIndex(ref) {
        return this.props.rightRef.findIndex(ele => ele === ref)
    }
    setRef(ref) {
        if (ref !== null) {
            this.props.setRef(ref,"rightId")
            ref.onmouseenter = () => {
                this.toggleHover(ref,'enter')
            }
            ref.onmouseleave = () => {
                this.toggleHover(ref,'leave')
            }
        }
    }

    toggleHover(rightRef,key){
        if(key === 'enter'){
        rightRef.className='hover'
        let index = this.getIndex(rightRef)
        this.props.leftRef[index].className="hover"
        }
        else{
            rightRef.className=''
            let index = this.getIndex(rightRef)
            this.props.leftRef[index].className=""
        }
    }

    render() {
        const cellStyle = { minWidth: 200, padding: '.5em 1em', textAlign: 'left', borderLeft: '1px solid white', borderBottom: '1px solid white' };
        return (
            <React.Fragment >
                {this.state.name.map((item, key) => {
                    return (<tr key={key} ref={this.setRef}>
                        <td style={cellStyle}>{item}</td>
                    </tr>)
                })}
            </React.Fragment>
        );
    }
}

export default Right;
