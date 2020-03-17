/**
 * 
 * 
 * 
 * 
 


Log user feedback to a database.
INPUTS
- name
- email address
- feedback
- category
- createDatetime

var feedback = {
    name: "",
    email: "",
    feedback: "",
    category: "",
    createDatetime: ""    
};


OUTPUTS
- written to a database
FUNCTIONS
1. feedbackInput - collect the feedback & calls feedbackValidator, formatDateTime
2. saveFeedback - write the feedback to a database & calls feedbackInputs
3. feedbackValidator - no empty fields for the feedback & calls emailValidator
4. emailValidator - validates email
5. formatDateTime - ensures UTC standard is enforced



 * 
 * 
 */
describe('The log user feedback to a database test case', function(){
    it('should have feedbackInut defined', function() {
        expect(feedbackInput).toBeDefined();
    });
    it('should have saveFeedback defined', function() {
        expect(saveFeedback).toBeDefined();
    });
    it('should have feedbackValidator defined', function() {
        expect(feedbackValidator).toBeDefined();
    });
    it('should have emailValidator defined', function() {
        expect(emailValidator).toBeDefined();
    });
    it('should have formatDateTime defined', function() {
        expect(formatDateTime).toBeDefined();
    });
    describe('should call the "feedbackInput" function', function(){
        beforeEach(function() {
            var feedback = {
                name: "",
                email: "",
                description: "",
                category: "",
                createDatetime: ""    
            };
        });
        it('and this function should call the feedbackValidator function', function() {
            
            spyOn('feedbackValidator').andReturn(false);
            feedbackInput(feedback);
            expect(feedbackValidator).toBeCalled();
        });
        it('and this function should call the formatDateTime function', function() {
            spyOn('formatDateTime').andReturn(null);
            feedbackInput(feedback);
            expect(formatDateTime).toBeCalled();
        });
        it('and this function should return a success', function() {
            spyOn('feedbackValidator').andReturn(true);
            spyOn('formatDateTime').andReturn("20200316082030000000");
            var result = feedbackInput(feedback);
            expect(result).toBeTruthy();
        });
        it('and this function should return false when formatDateTime function fails', function() {
            spyOn('feedbackValidator').andReturn(true);
            spyOn('formatDateTime').andReturn("dfgikd");
            var result = feedbackInput(feedback);
            expect(result).toBeFalsy();
        });
        // THIS IS NOT A UNIT TEST AS THIS TEST GOES THROUGH TWO FUNCTIONS - feedbackInput & formatDateTime
        it('and this function should return false when feedback.createDatetime is hello', function() {
            spyOn('feedbackValidator').andReturn(true);
            feedback.createDatetime = "hello";
            var result = feedbackInput(feedback);
            expect(result).toBeFalsy();
        });
        it('and this function should return a success for dates in the past', function() {
            spyOn('feedbackValidator').andReturn(true);
            spyOn('formatDateTime').andReturn("18500316082030000000");
            console.log(feedback.createDatetime);
            var result = feedbackInput(feedback);
            expect(result).toBeTruthy();
        });
    });
    describe('should call the "saveFeedback" function', function(){
    });
    describe('should call the "feedbackValidator" function', function(){
    });
    describe('should call the "emailValidator" function', function(){
    });
    describe('should call the "formatDateTime" function', function(){
    });
});