import React from 'react';


class ClassComponent extends React.Component {

    constructor(){
        super();
        console.log('class component constructor');
    }

    componentDidMount(){
        console.log('class componentDidMount loaded')
        // fetch(apiurl)
        // dispatch(action)
    }

    componentDidUpdate(){
        console.log('class did update', this.props.countValue)
    }

    componentWillUnmount(){
        console.log(' clas un mount');
    }


    render(){
        return <div> class count value ---- {this.props.countValue} </div>
    }
}

export default ClassComponent;