const MissionCommander=require('./../app/missioncommander')
describe("Unit Test for Mission Commander Class",()=>{
    test('1) Create a mission commander objet',()=>{
        const myMissionCommander =new MissionCommander("Woopa")
        expect(myMissionCommander.name).toBe("Woopa");
    });
})