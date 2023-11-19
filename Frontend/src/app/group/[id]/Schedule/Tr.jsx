import React, {useState} from 'react';
import LinkTd from './LinkTd';

function Tr ({ member, questions }) {
  var num = 0;
  

  return (
    <tr className="bg-white border-2 border-gray-200">
      <td className="px-4 py-3">{member.memberName}</td>
      {questions.map((question, iIdx) => {
        num = 0
        question.memberAlgorithmQuestList.map((memberQuest, jIdx) => {
          if (memberQuest.memberId == member.memberId) {
            num = memberQuest.memberAlgorithmQuestSolved ? 2 : 1;
          }
        });

        if(num > 0) {
          return(
            <LinkTd member={member} questionId={question.algorithmQuestId} solved={num}/>
          )
        } 
        else {
          return (
            <td></td>
          )
        }
      })}
    </tr>
  );
};

export default Tr;