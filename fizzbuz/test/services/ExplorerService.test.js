const ExplorerServices = require("../../lib/services/ExplorerServices");

describe("Test para ExplorerService",()=>{
    test("Requerimiento 1: Calcular todos los explorers en una misión",()=>{
        const explorers=[{mission:"node"}];
        const explorerInNode=ExplorerServices.filterByMission(explorers, "node");
        expect(explorerInNode.length).toBe(1);
    });
})