import { useEffect, useState } from "react";
import { useUsers } from "../../contexts/users/users";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import type { User } from "../../types";

const Profile = () => {
  const { getUser, updateUser } = useUsers();
  const [editProfile, setEditProfile] = useState<User>({
    id: "",
    name: "",
    email: "",
    phone: "",
    city: "",
    about: "",
  });

  useEffect(() => {
    const user = getUser();
    if (!user) return;
    setEditProfile({
      ...user,
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      city: user.city,
      about: user.about,
    });
  }, [getUser]);

  const handleUpdateUser = async (user: User) => {
    try {
      await updateUser(user);
      return alert("Perfil atualizado com sucesso");
    } catch (error) {
      return alert("Erro ao atualizar perfil");
    }
  };
  return (
    <div className="flex flex-col mb-20 min-h-screen w-1/3 mx-auto">
      <h1 className="text-2xl font-bold text-[#3772FF] mt-4 text-center">
        Esse é o perfil que aparece para responsáveis ou ONGs que recebem sua
        mensagem.
      </h1>
      <div className="flex flex-col items-center justify-center gap-4 mt-10">
        <Input
          label="Nome"
          type="text"
          placeholder="Digite seu nome"
          value={editProfile.name ?? ""}
          onChange={(e) =>
            setEditProfile({ ...editProfile, name: e.target.value })
          }
        />
        <Input
          label="Email"
          type="email"
          placeholder="Digite seu email"
          value={editProfile.email ?? ""}
          onChange={(e) =>
            setEditProfile({ ...editProfile, email: e.target.value })
          }
        />
        <Input
          label="Telefone"
          type="tel"
          placeholder="Digite seu telefone"
          value={editProfile.phone ?? ""}
          onChange={(e) =>
            setEditProfile({ ...editProfile, phone: e.target.value })
          }
        />
        <Input
          label="Cidade"
          type="text"
          placeholder="Digite sua cidade"
          value={editProfile.city ?? ""}
          onChange={(e) =>
            setEditProfile({ ...editProfile, city: e.target.value })
          }
        />
        <Input
          label="Sobre"
          type="text"
          placeholder="Fale sobre você"
          value={editProfile.about ?? ""}
          onChange={(e) =>
            setEditProfile({ ...editProfile, about: e.target.value })
          }
        />
        <Button size="sm" onClick={() => handleUpdateUser(editProfile)}>
          Editar Perfil
        </Button>
      </div>
    </div>
  );
};

export default Profile;
