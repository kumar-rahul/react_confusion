export const FORM = {
    formTitle               : "form untitled",
    feedbackFormType        : "",   //  <TEACHER_FEEDBACK, CONTENT_FEEDBACK, PARENTS_FEEDBACK>
    question                : [
                                {
                                    feedbackQuestionType: "SCQ",
                                    mandatory:false,
                                    options:["Option1","Option2"],
                                    questionText:"scq dynamic question-1",
                                    responses:[]
                                },
                                {
                                    feedbackQuestionType: "MCQ",
                                    mandatory:false,
                                    options:["Option1","Option2"],
                                    questionText:"mcq dynamic question-2",
                                    responses:[]
                                },
                                {
                                    feedbackQuestionType: "SHORT_ANSWER",
                                    mandatory:false,
                                    questionText:"short answer dynamic question-3",
                                    responses:[]
                                },
                                {
                                    feedbackQuestionType: "PARAGRAPH",
                                    mandatory:false,
                                    questionText:"paragraph dynamic question-4",
                                    responses:[]
                                },
                                {
                                    feedbackQuestionType: "LINEAR_SCALE",
                                    mandatory:false,
                                    options:["1","2"],
                                    questionText:"linear scale dynamic question-5",
                                    responses:[]
                                }                                                                                                                              
                            ],
    staticFeedbackQuestions : [
                                {
                                    feedbackQuestionType:null,
                                    mandatory:false,
                                    options:["Option1","Option2"],
                                    questionText:"untitled static question",
                                    responses:[]
                                }
                            ],
    communication           : "",   // <EMAIL,WEBSITE, BOTH>
    feedbackFormType        : "TEACHER FEEDBACK", 
    contextType             : "OTF",   // <OTF, OTF_COURSE>    
};
