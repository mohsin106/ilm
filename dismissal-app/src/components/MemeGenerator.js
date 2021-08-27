import React, {Component} from "react"

class MemeGenerator extends Component {
    // you no longer need to create a constructor to use state variables.
    state = {
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
        allMemeImgs: []
    }
    // constructor() {
    //     super()
    //     this.state = {
    //         topText: "",
    //         bottomText: "",
    //         randomImage: "http://i.imgflip.com/1bij.jpg",
    //         allMemeImgs: []
    //     }
    //     // this.handleChange = this.handleChange.bind(this)
    //     // this.handleSubmit = this.handleSubmit.bind(this)
    // }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                // console.log(memes[0])
                console.log(this.state.allMemeImgs)
                this.setState({ allMemeImgs: memes })
            })
    }

    // updated to use arrow methods which means you don't have to code the bind statements inside of the constructor function above.
    handleChange = (event) => {
        const {type, name, value, checked} = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMeme = this.state.allMemeImgs[randNum].url
        this.setState({
            randomImage: randMeme
        })
    }

    render() {
        return(
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="topText"
                        value={this.state.topText}
                        placeholder="Enter Top Text"
                        onChange={this.handleChange}
                    >
                    </input>
                    <br></br>
                    <input
                        type="text"
                        name="bottomText"
                        value={this.state.bottomText}
                        placeholder="Enter Bottom Text"
                        onChange={this.handleChange}
                    >
                    </input>
                    <br/>
                    <button>Gen</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImage} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>

                </div>
            </div>
        )
    }
   
}
export default MemeGenerator