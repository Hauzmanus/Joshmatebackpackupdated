import { DependencyContainer } from "tsyringe";

import { IPostDBLoadMod } from "@spt/models/external/IPostDBLoadMod";
import { DatabaseServer } from "@spt/servers/DatabaseServer";
import { ILogger } from "@spt/models/spt/utils/ILogger";


class Mod implements IPostDBLoadMod
{
    public postDBLoad(container: DependencyContainer): void 
    {
		// Log load
		const logger = container.resolve("WinstonLogger");
        logger.log("[Josh Mate] Better Backpacks is loading...", "blue");
		
        // get database from server
        const databaseServer = container.resolve("DatabaseServer");
        // Get all the in-memory json found in /assets/database
        const tables = databaseServer.getTables();
        const items = tables.templates.items;

        const backpacks = [
            // WARNING MAKING THIS ANY BIGGER WILL CAUSE GRID OVERLAPS
            {
                "name": "Direct Action Dragon Egg Mark II backpack (Black)",
                "itemID": "656f198fb27298d6fd005466",
                "horizontal": 2,
                "vertical":   2,
                "removeFilters": false
            },
            // WARNING MAKING THIS ANY BIGGER WILL CAUSE GRID OVERLAPS
            {
                "name": "Mystery Ranch Terraframe backpack (Christmas)",
                "itemID": "674da9cf0cb4bcde7103c07b",
                "horizontal": 2,
                "vertical": 5,
                "removeFilters": false
            },
            // WARNING MAKING THIS ANY BIGGER WILL CAUSE GRID OVERLAPS
            {
                "name": "Mystery Ranch Terraframe backpack (Olive)",
                "itemID": "674da107c512807d1a0e7436",
                "horizontal": 2,
                "vertical": 5,
                "removeFilters": false
            },
            // WARNING MAKING THIS ANY BIGGER WILL CAUSE GRID OVERLAPS
            {
                "name": "Mystery Ranch SATL Bridger Assault Pack (Foliage)",
                "itemID": "656e0436d44a1bb4220303a0",
                "horizontal": 6,
                "vertical": 2,
                "removeFilters": false
            },
            // WARNING MAKING THIS ANY BIGGER WILL CAUSE GRID OVERLAPS
            {
                "name": "5.11 Tactical RUSH 100 backpack (Black)",
                "itemID": "67458730df3c1da90b0b052b",
                "horizontal": 2,
                "vertical": 2,
                "removeFilters": false
            },
            {
                "name": "6Sh118 raid backpack",
                "itemID": "5df8a4d786f77412672a1e3b",
                "horizontal": 7,
                "vertical":   13,
                "removeFilters": false
            },
            {
                "name": "Mystery Ranch NICE COMM 3 BVS frame system",
                "itemID": "628bc7fb408e2b2e9c0801b1",
                "horizontal": 7,
                "vertical": 12,
                "removeFilters": true
                
            },
            {
                "name": "Mystery Ranch Blackjack 50 backpack Multicam",
                "itemID": "5c0e774286f77468413cc5b2",
                "horizontal": 7,
                "vertical":   11,
                "removeFilters": false
            },
            {
                "name": "Partisan's Bag",
                "itemID": "66a9f98f3bd5a41b162030f4",
                "horizontal": 7,
                "vertical":   8,
                "removeFilters": false
            },
            {
                "name": "LBT-2670 Slim Field Med Pack",
                "itemID": "5e4abc6786f77406812bd572",
                "horizontal": 7,
                "vertical":   10,
                "removeFilters": true
            },
            {
                // WARNING MAKING THIS ANY BIGGER WILL CAUSE GRID OVERLAPS
                "name": "Eberlestock F4 Terminator load bearing backpack Tiger Stripe",
                "itemID": "5f5e46b96bdad616ad46d613",
                "horizontal": 5,
                "vertical":   4,
                "removeFilters": false
            },
            {
                "name": "Sanitars bag",
                "itemID": "5e997f0b86f7741ac73993e2",
                "horizontal": 7,
                "vertical":   7,
                "removeFilters": false
            },
            {
                // WARNING MAKING THIS ANY BIGGER WILL CAUSE GRID OVERLAPS
                "name": "3V Gear Paratus 3-Day Operators Tactical backpack",
                "itemID": "5c0e805e86f774683f3dd637",
                "horizontal": 5,
                "vertical":   5,
                "removeFilters": false
            },
            {
                // WARNING MAKING THIS ANY BIGGER WILL CAUSE GRID OVERLAPS
                "name": "Eberlestock G2 Gunslinger II backpack Dry Earth",
                "itemID": "6034d2d697633951dc245ea6",
                "horizontal": 3,
                "vertical":   5,
                "removeFilters": false
            },
            {
                "name": "SSO Attack 2 raid backpack",
                "itemID": "5ab8ebf186f7742d8b372e80",
                "horizontal": 7,
                "vertical":   10,
                "removeFilters": false
            },
            {
                "name": "Santas Bag",
                "itemID": "61b9e1aaef9a1b5d6a79899a",
                "horizontal": 7,
                "vertical":   10,
                "removeFilters": false
            },
            {
                "name": "Pilgrim tourist backpack",
                "itemID": "59e763f286f7742ee57895da",
                "horizontal": 7,
                "vertical":   10,
                "removeFilters": false
            },
            {
                "name": "Tasmanian Tiger Trooper 35 backpack",
                "itemID": "639346cc1c8f182ad90c8972",
                "horizontal": 7,
                "vertical":   10,
                "removeFilters": false
            },
			{
				"name": "Gruppa 99 T30 Backpack",
				"itemID": "628e1ffc83ec92260c0f437f",
				"horizontal": 7,
				"vertical": 7,
				"removeFilters": false
			},
			{
				"name": "Gruppa 99 T30 Backpack (Multicam)",
				"itemID": "62a1b7fbc30cfa1d366af586",
				"horizontal": 7,
				"vertical": 7,
				"removeFilters": false
			},
            {
                // WARNING MAKING THIS ANY BIGGER WILL CAUSE GRID OVERLAPS
                "name": "Oakley Mechanism heavy duty backpack Black",
                "itemID": "5d5d940f86f7742797262046",
                "horizontal": 4,
                "vertical":   4,
                "removeFilters": false
            },
            {
                "name": "ANA Tactical Beta 2 Battle backpack",
                "itemID": "5b44c6ae86f7742d1627baea",
                "horizontal": 7,
                "vertical":   7,
                "removeFilters": false
            },
            {
                "name": "Camelbak TriZip assault backpack (Multicam)",
                "itemID": "66b5f22b78bbc0200425f904",
                "horizontal": 7,
                "vertical":   7,
                "removeFilters": false
            },
            {
                "name": "Camelbak TriZip assault backpack (Foliage)",
                "itemID": "545cdae64bdc2d39198b4568",
                "horizontal": 7,
                "vertical":   7,
                "removeFilters": false
            },
            {
                "name": "Eberlestock F5 Switchblade backpack Dry Earth",
                "itemID": "5f5e467b0bc58666c37e7821",
                "horizontal": 7,
                "vertical":   7,
                "removeFilters": false
            },
            {
                "name": "Gruppa 99 T20 backpack Black",
                "itemID": "618bb76513f5097c8d5aa2d5",
                "horizontal": 7,
                "vertical":   6,
                "removeFilters": false
            },
            {
                "name": "Gruppa 99 T20 backpack Multicam",
                "itemID": "619cf0335771dd3c390269ae",
                "horizontal": 7,
                "vertical":   6,
                "removeFilters": false
            },
            {
                "name": "Gruppa 99 T20 backpack",
                "itemID": "618bb76513f5097c8d5aa2d5",
                "horizontal": 7,
                "vertical":   6,
                "removeFilters": false
            },
            {
                "name": "Hazard 4 Drawbridge backpack Coyote Tan",
                "itemID": "60a272cc93ef783291411d8e",
                "horizontal": 7,
                "vertical":   6,
                "removeFilters": false
            },
            {
                "name": "LBT-1476A 3Day Pack Alpine woodland",
                "itemID": "67458794e21e5d724e066976",
                "horizontal": 7,
                "vertical":   6,
                "removeFilters": false
            },
            {
                "name": "LBT-1476A 3Day Pack Woodland",
                "itemID": "618cfae774bb2d036a049e7c",
                "horizontal": 7,
                "vertical":   6,
                "removeFilters": false
            },
            {
                "name": "Hazard 4 Takedown sling backpack Black",
                "itemID": "6034d103ca006d2dca39b3f0",
                "horizontal": 5,
                "vertical":   9,
                "removeFilters": false
            },
            {
                "name": "Hazard 4 Takedown sling backpack Multicam",
                "itemID": "6038d614d10cbf667352dd44",
                "horizontal": 5,
                "vertical":   9,
                "removeFilters": false
            },
            {
                "name": "Hazard 4 Pillbox backpack",
                "itemID": "60a2828e8689911a226117f9",
                "horizontal": 7,
                "vertical":   6,
                "removeFilters": false
            },
            {
                "name": "LBT-8005A Day Pack backpack",
                "itemID": "5e9dcf5986f7746c417435b3",
                "horizontal": 6,
                "vertical":   6,
                "removeFilters": false
            },
            {
                "name": "Scav backpack",
                "itemID": "56e335e4d2720b6c058b456d",
                "horizontal": 6,
                "vertical":   6,
                "removeFilters": false
            },
            {
                "name": "WARTECH Berkut BB102 backpack",
                "itemID": "5ca20d5986f774331e7c9602",
                "horizontal": 6,
                "vertical":   6,
                "removeFilters": false
            },
			{
                "name": "Vertx Ready Pack backpack (Red)",
                "itemID": "66b5f247af44ca0014063c02",
                "horizontal": 6,
                "vertical":   6,
                "removeFilters": false
            },   
            {
                "name": "Flyye MBSS backpack",
                "itemID": "544a5cde4bdc2d39388b456b",
                "horizontal": 5,
                "vertical":   6,
                "removeFilters": false
            },
            {
                "name": "Duffle bag",
                "itemID": "56e33634d2720bd8058b456b",
                "horizontal": 6,
                "vertical":   4,
                "removeFilters": false
            },
            {
                "name": "LolKek 3F Transfer tourist backpack",
                "itemID": "5f5e45cc5021ce62144be7aa",
                "horizontal": 4,
                "vertical":   6,
                "removeFilters": false
            },
            {
                "name": "Transformer Bag",
                "itemID": "56e33680d2720be2748b4576",
                "horizontal": 5,
                "vertical":   4,
                "removeFilters": false
            },
            {
                "name": "VKBO army bag",
                "itemID": "5ab8ee7786f7742d8f33f0b9",
                "horizontal": 4,
                "vertical":   5,
                "removeFilters": false
            },
            {
                "name": "Tactical sling bag",
                "itemID": "5ab8f04f86f774585f4237d8",
                "horizontal": 4,
                "vertical":   4,
                "removeFilters": false
            }            
        ]

        // Loop through and update back pack stats in game
        let i = 0;
        while (i < backpacks.length ) {

			// Update Base Grid with Configured Cells
            items[backpacks[i].itemID]._props.Grids[0]._props.cellsH = backpacks[i].horizontal;
            items[backpacks[i].itemID]._props.Grids[0]._props.cellsV = backpacks[i].vertical;
			
			// Remove filters if requested to
            if (backpacks[i].removeFilters === true) {
                items[backpacks[i].itemID]._props.Grids[0]._props.filters = [];
            }
            i++;
        }
        
		logger.log("[Josh Mate] Better Backpacks has finished loading.", "green");
       
    }
}

module.exports = { mod: new Mod() }