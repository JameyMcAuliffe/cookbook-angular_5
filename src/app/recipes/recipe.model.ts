import { Ingredient, Instruction } from './ingredient.model';

export class Recipe {
	public name: string;
	public description: string;
	public imagePath: string;
	public ingredients: Ingredient[];
	public instructions: Instruction[];

	constructor(name: string, desc: string, imagePath: string, ingredients: Ingredient[], inst: Instruction[]) {
		this.name = name;
		this.description = desc;
		this.imagePath = imagePath;
		this.ingredients = ingredients;
		this.instructions = inst; 
	}
}
