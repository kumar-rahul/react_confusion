import React, { Component ,PureComponent }  from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

function RenderQuestion({question}) {
    const formQuestions = question.map((ques,index) => {

        if(ques.feedbackQuestionType === "SCQ"){
            return (
                <RenderSCQ scqQues={ques} key={index} />
            );
        }else if(ques.feedbackQuestionType === "MCQ") {
            return (
                <RenderMCQ mcqQues={ques} key={index} />
            );            
        }else if(ques.feedbackQuestionType === "SHORT_ANSWER") {
            return (
                <RenderShortAnswer saQues={ques} key={index}/>
            );            
        }else if(ques.feedbackQuestionType === "PARAGRAPH") {
            return (
                <RenderParagraph pQues={ques} key={index}/>
            );            
        }else if(ques.feedbackQuestionType === "LINEAR_SCALE") {
            return (
                <RenderLinearScale lsQues={ques} key={index}/>
            );            
        }

    });    

    return(
        <div>{formQuestions}</div>
    );
}

function Form({item}) {

    return(
        <div className="fb-form-list">
            <div className="form-title-container">
                <div className="form-title-text">{item.formTitle}</div>
            </div>
            <RenderQuestion question={item.question}/>
        </div>    
    );
}

class RenderSCQ extends PureComponent{
    constructor(props){
        super(props);
        this.state={
            selectedOption: '',
        };
        this.handleOptionChange=this.handleOptionChange.bind(this);
    }
    handleOptionChange(changeEvent) {
        this.setState({
        selectedOption: changeEvent.target.value
        });
    }
    render(){
        const { scqQues, quesId }=this.props;
        const quesOptions = scqQues.options.map((option,index) => {
            return (
                <div className="option-container" key={index}>
                    <input type="radio" className="option-checkbox" value={option} onChange={this.handleOptionChange} checked={this.state.selectedOption === option} />
                    <div className="option-text">{option}</div>
                </div>
            );
        });
        return(
            <div className="question-container" key={quesId}>
                <div className="question-text">{scqQues.questionText}</div>
                <div>{quesOptions}</div>
            </div>        
        );
    }
}

class RenderMCQ extends Component{
    constructor(props){
        super(props);
        this.state={
            selectedOption: [],
            isChecked: false
        };
        this.handleMultipleOption = this.handleMultipleOption.bind(this);
       this.isOptionSelected = this.isOptionSelected.bind(this);        
    }
    handleMultipleOption(changeEvent) {
        var optionArr = this.state.selectedOption;
        var optionValue = changeEvent.target.value;
        if(!this.isOptionSelected(optionValue)){
            optionArr.push(optionValue);
        }else {
            var index = optionArr.indexOf(optionValue);
            if (index > -1) {
                optionArr.splice(index, 1);
            }
        }
        this.setState({
            selectedOption: optionArr
        });
    }
    isOptionSelected(option) {
        return this.state.selectedOption.indexOf(option) === -1 ?  false :  true ;
    }
    render(){
        const { selectedOption } = this.state;
        const { mcqQues, quesId } = this.props;
        const quesOptions = mcqQues.options.map((option,index) => {
            return (
                <div className="option-container" key={index}>
                    <input type="checkbox" className="option-checkbox" value={option} onChange={this.handleMultipleOption} checked={selectedOption.indexOf(option) === -1 ?  false :  true} />
                    <div className="option-text">{option}</div>
                </div>
            );
        });
        return(
            <div className="question-container" key={quesId}>
                <div className="question-text">{mcqQues.questionText}</div>
                <div>{quesOptions}</div>
            </div>        
        );
    }
}

class RenderShortAnswer extends PureComponent{
    constructor(props){
        super(props);
        this.state={
            value: '',
        };
        this.handleValueChange = this.handleValueChange.bind(this);
    }
    handleValueChange(changeEvent) {
        this.setState({
            value: changeEvent.target.value
        });
    }
    render(){
        const { saQues, quesId } = this.props;

        return(
            <div className="question-container" key={quesId}>
                <div className="question-text">{saQues.questionText}</div>
                <div>
                    <input type="text" value={this.state.value} onChange={this.handleValueChange} className='short-answer-text' />
                </div>
            </div>        
        );
    }
}

class RenderParagraph extends PureComponent{
    constructor(props){
        super(props);
        this.state={
            value: '',
        };
        this.handleValueChange = this.handleValueChange.bind(this);
    }
    handleValueChange(changeEvent) {
        this.setState({
            value: changeEvent.target.value
        });
    }
    render(){
        const { pQues, quesId } = this.props;

        return(
            <div className="question-container" key={quesId}>
                <div className="question-text">{pQues.questionText}</div>
                <div>
                    <input type="text" value={this.state.value} onChange={this.handleValueChange} className='paragraph-text' />
                </div>
            </div>        
        );
    }
}

class RenderLinearScale extends PureComponent{
    constructor(props){
        super(props);
        this.state={
            selectedOption: '',
        };
        this.handleOptionChange=this.handleOptionChange.bind(this);
    }
    handleOptionChange(changeEvent) {
        this.setState({
        selectedOption: changeEvent.target.value
        });
    }
    render(){
        const { lsQues, quesId }=this.props;
        const quesOptions = lsQues.options.map((option,index) => {
            return (
                <div className="option-container" key={index}>
                    <input type="radio" className="option-checkbox" value={option} onChange={this.handleOptionChange} checked={this.state.selectedOption === option} />
                    <div className="option-text">{option}</div>
                </div>
            );
        });
        return(
            <div className="question-container" key={quesId}>
                <div className="question-text">{lsQues.questionText}</div>
                <div>{quesOptions}</div>
            </div>        
        );
    }
}

class StudentFbForm extends PureComponent {
    render() {
        return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <Form item={this.props.form} />          
                </div>
            </div>
        </div>
        );
    }
}
export default StudentFbForm;