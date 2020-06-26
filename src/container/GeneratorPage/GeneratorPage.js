import React,{Component} from 'react';
import classes from './GeneratorPage.module.css';
import NumberBlocks from '../../components/NumberBlocks/NumberBlocks';

class GeneratorPage extends Component {

    state = {
        numbers: {
            first : 0,
            second : 0,
            third : 0,
            fourth : 0,
            fifth : 0,
            sixth : 0,
            seventh: 0,
        }

    }

    newNumbers = () => {
        let newnumbers = [];
        for (let i = 0; i < 7; ++i){
            newnumbers.push(Math.floor(Math.random()*50+1));
        }
        newnumbers.sort(function(a,b){return a -b});

        this.setState({numbers:newnumbers});
        console.log(newnumbers);
    }

    render () {        
        return(
            <div>
                <NumberBlocks newnumbers = {this.state.numbers}/>
                <button className = {classes.Button} onClick = {this.newNumbers}> Good Luck</button> 
            </div>
        );
    }
}

export default GeneratorPage;