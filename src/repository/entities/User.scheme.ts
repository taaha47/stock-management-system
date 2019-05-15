import {Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate} from 'typeorm';
const bcrypt = require('bcryptjs');


//[todo] add an env file, store hash round value 10.
@Entity()
export class User {
    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword () {
        if (this.password) {
            this.passwordHash = await bcrypt.hash(this.password, 10)
        }
    }


    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    public password: string;

    @Column()
    passwordHash: string;
}
