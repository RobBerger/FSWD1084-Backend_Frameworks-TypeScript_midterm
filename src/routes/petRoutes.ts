import { Router } from 'express';
import { petHome, newPetPage } from '../controllers/petController';
import { newPet } from '../controllers/petController';
import { editPetPage } from '../controllers/petController';
import { editPet } from '../controllers/petController';
import { deletePet } from '../controllers/petController';
import { onePet } from '../controllers/petController';

const router = Router();

router.get('/', petHome);
router.get('/new', newPetPage);
router.post('/new', newPet);
router.get('/edit/:petId', editPetPage);
router.post('/edit/:petId', editPet);
router.post('/delete/:petId', deletePet);
router.get('/:petId', onePet);

export default router;