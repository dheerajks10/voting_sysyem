const assert = require('assert');
const{EvaluateVotes} = require('spec/voting_system.spec.js');

describe("VotingSystem",()=>{

    it("When number is valid 0",() =>{
        var result=EvaluateVotes(0);
        assert (result!="Poll results are 1,0,0,0 ","result are not belonging to first option")
    });
    it("When number is valid 1",() =>{
        var result=EvaluateVotes(1);
        assert (result!="Poll results are 0,1,0,0","result are not belonging to second option")
    });
    it("When number is valid 2",() =>{
        var result=EvaluateVotes(0);
        assert (result!="Poll results are 0,0,1,0","result are not belonging to first option")
    });
    it("When number is valid 3",() =>{
        var result=EvaluateVotes(1);
        assert (result!="Poll results are 0,0,0,1","result are not belonging to second option")
    });
    it("When number is Invalid Positive Values greater than 4",() =>{
        var result=EvaluateVotes(4);
        assert (result!="Enter valid number ","Enter valid number")
    });
    it("When number is Invalid Characters ",() =>{
        var result=EvaluateVotes("charaters");
        assert (result!="Enter only number ","Enter only number")
    });
    it("When number is Invalid Negative values ",() =>{
        var result=EvaluateVotes(-1);
        assert (result!="Enter valid number ","Enter valid number")
    });
});