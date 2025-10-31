import {pool} from '../db.js'

export const getUsers = async(req, res) => {
    const {rows} = await pool.query('select * from users');
    console.log(rows);
    res.json(rows);
};


export const getUserbyId = async (req, res) => {
    const {id} = req.params;
    const {rows} = await pool.query('select * from users where id = $1', [id]);

    if(rows.length === 0 ) {
        return res.status(404).json({message: "user not found"});
    }
    res.json(rows)
};

export const InsertUser = async(req, res) => {
    const data = req.body;
    console.log(data);
    const {rows} = await pool.query('insert into users (nombre) values($1) returning * ', [data.nombre]);
    res.send(rows[0])   
};


export const DeleteUser = async(req, res) => {
    const {id} = req.params;
    const {rows, rowCount} =await pool.query('delete from users where id = $1 returning *', [id]);
    console.log(rows);


    if(rowCount === 0){
        return res.status(404).json({massage: "User not found"});
    }
    res.send(rows);
}


export const UpdateUser = async(req, res)=> {
    const  {id} = req.params;
    const data = req.body;
    const {rows} = await pool.query('update users set nombre = $1 where id = $2 returning * ',[data.nombre,id]);

    res.send(rows[0]);
}