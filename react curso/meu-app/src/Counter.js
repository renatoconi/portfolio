import React, { useEffect } from "react";


function Counter(props){
    
    const [count, setCont ] = React.useState(props.count);


    useEffect(() => {
        setCont(parseInt(localStorage.getItem("count")));
       
        return ()=>{
            console.log("não tem mais contador")
        }

    }, [])

    useEffect(()=>{
        document.title = count;
        localStorage.setItem("count", count);
    }, [count]);

    function add(){
        setCont(count + 1);
        
    }


    return (
    <div>
         <h1>Counter: {count}</h1> 
         <button onClick={add} >add</button>
    </div>
    )

}
export default Counter;


/*class Counter extends React.Component {


    constructor(props){
        super(props);
        this.state = {count:0}
        this.add = this.add.bind(this);
    }

    


    add(){
      // this.setState({count: this.state.count + 1});
      this.setState((state)=>{return {count: state.count + 1};},()=>{
        console.log(this.state);
        localStorage.setItem("state", JSON.stringify(this.state))
      });
    }

    componentDidMount(){
        this.setState(JSON.parse(localStorage.getItem("state")))
        
    }

    componentWillUnmount(){
        
    }


    shouldComponentUpdate(){
        return true;
    }

    render() {
        return (<div> <h1>Counter: {this.state.count}</h1> 
        <button onClick={() => this.add()}>add</button>
        </div>)
    }
}

*/