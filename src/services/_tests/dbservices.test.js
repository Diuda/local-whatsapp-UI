import DBServices from '../DBServices';
import * as types from '../../constants/constant';
import { expect } from 'chai';



describe('DB service testing', () => {
	it('should return promise with get users', async () => {

		const getUserPromise = await DBServices.getUsers();
		console.log(getUserPromise);
		// const data = await getUserPromise;
		expect(getUserPromise).to.equal("hi");
	})
});