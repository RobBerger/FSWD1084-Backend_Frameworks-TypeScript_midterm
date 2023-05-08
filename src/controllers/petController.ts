import { RequestHandler } from "express";
import { Pets } from "../models/pets";

export const petHome: RequestHandler = (req, res, next) => {
    res.redirect('/pets');
}

export const allPets: RequestHandler = (req, res, next) => {
    let petList: Pets[] await Pets.findAll();
    res.render('all-pets', {petList});
}

export const onePet: RequestHandler = (req, res, next) => {
    let petId = req.params.petId;
    let petListing: Pets | null = await Pets.findByPk(petId);
    if (petListing) {
        res.render('pet-detail', { foundPet: petListing });
    } else {
        res.status(404).render('error', { message: 'Doggy Not Found!'});
    }
}

export const newPetPage: RequestHandler = (req, res, next) => {
    res.render('new-pet');
}

export const newPet: RequestHandler = async (req, res, next) => {
    let newPet: Pets = req.body;
    await Pets.create(newPet);
    res.redirect('/pets');
}

export const editPetPage: RequestHandler = async (req, res, next) => {
    let petId = req.params.petId;
    let petListing: Pets | null = await Pets.findOne({
        where: { petId: petId }
    });
    if (petListing) {
        res.render('edit-pet', { foundPet: petListing });
    } else {
        res.status(404).render('error', { message: 'Kitty Not Found!'});
    }
}

export const editPet: RequestHandler = async (req, res, next) => {
    let petId = req.params.petId;
    let updatedPet: Pets = req.body;
    console.log(petId);
    let [updated] = await Pets.update(updatedPet, {
        where: { petId: petId }
    });
    console.log(updated);
    if (updated === 1) {
        res.redirect('/pets');
    } else {
        res.render('error', { message: "Pet couldn't be updated"});
    }
}

export const deletePet: RequestHandler = async (req, res, next) => {
    let petId = req.params.petId;

    let deleted = await Pets.destroy({
        where: { petId: petId }
    });
    if (deleted) {
        res.redirect('/pets')
    } else {
        res.status(404).render('error', { message: 'Cannot find pet'});
    }
}