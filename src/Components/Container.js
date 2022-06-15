import React, {useState} from "react";
import '../Style/container.css';

export default function (){


    const[form, setForm] = useState({'nome':"",'email':"", 'senha':""})

    function handleForm(e){
        if (e.target.getAttribute('name') =='nome'){
            setForm({'nome':e.target.value,'email':form.email, 'senha':form.senha})
        }else if (e.target.getAttribute('name') =='email'){
            setForm({'nome':form.nome,'email':e.target.value, 'senha':form.senha})
        }else if (e.target.getAttribute('name') =='senha'){
            setForm({'nome':form.nome,'email':form.email, 'senha':e.target.value})
        }
        
    }

    return(
        <div className="body">
            <div className="nav">
                <ul>
                    <li><a href="">Testando menu</a></li>
                    <li><a href="">só existe</a></li>
                    <li><a href="">Vamos ver</a></li>
                </ul>

            </div>
            <div className="news">
                <p>Entenda como voce pode ajudar as pessoas a sua volta que estejam com problemas. Lorem ipsum dolor sit
               amet consectetur adipisicing elit. Ut nihil molestias at nanottus illo delectus ea voluptatem blanditiis
               enim quia, quasi adipisci eligendi, ratione tenetur. Sapiente quasi cupiditate dignissimos sequi.</p>
               <p>Entenda como voce pode ajudar as pessoas a sua volta que estejam com problemas. Lorem ipsum dolor sit
               amet consectetur adipisicing elit. Ut nihil molestias at nanottus illo delectus ea voluptatem blanditiis
               enim quia, quasi adipisci eligendi, ratione tenetur. Sapiente quasi cupiditate dignissimos sequi.</p>

            </div>
            <div className="aside" style={{display: 'flex' , flexDirection: 'column'}}>
                <label>Nome:</label>
                <input type='text' name="nome" value={form.nome} onChange={(e)=>handleForm(e)} ></input>
                <label>E-mail:</label>
                <input type="e-mail" name="email" value={form.email} onChange={(e)=>handleForm(e)}></input>
                <label>Senha:</label>
                <input type="password" name="senha" value={form.senha} onChange={(e)=>handleForm(e)}></input>
                <p>O usuário {form.nome}</p>
                <p>Tem email: {form.email}</p>
                <p>Senha: {form.senha}</p>
            </div>

        </div>
    )
}