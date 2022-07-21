using Microsoft.EntityFrameworkCore;
using PersonalBlog.src.data;
using PersonalBlog.src.dtos;
using PersonalBlog.src.models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PersonalBlog.src.repositories.implementations
{
    /// <summary>
    /// <para>Resumo: Class responsible for implementing IUsuario</para>
    /// <para>Criado por: Murilo Gama</para>
    /// <para>Versão: 1.0</para>
    /// <para>Data: 12/05/2022</para>
    /// </summary>
    public class UserRepository : IUser
    {
       
        #region Attributes

        private readonly PersonalBlogContext _context;

        #endregion Attributes

        #region Constructor

        public UserRepository(PersonalBlogContext context)
        {
            _context = context;
        }

        #endregion Constructor

        #region Methods


        /// <summary>
        /// <para>Resumo: Asynchronous method to save a new user</para>
        /// </summary>
        /// <param name="newUser">NovoUsuarioDTO</param>
        public async Task AddUserAsync(NewUserDTO newUser)
        {
            await _context.Users.AddAsync(new UserModel
            {
                Email = newUser.Email,
                Name = newUser.Name,
                Password = newUser.Password,
                Photograph = newUser.Photograph,
                Type = newUser.Type
            }); 

            await _context.SaveChangesAsync();
        }

        /// <summary>
        /// <para>Resumo: Asynchronous method to update a user</para>
        /// </summary>
        /// <param name="UpdateUser">AtualizarUsuarioDTO</param>
        public async Task AttUserAsync(UpdateUserDTO UpdateUser)
        {
            var existingUser = await GetUserByIdAsync(UpdateUser.Id);
            existingUser.Name = UpdateUser.Name;
            existingUser.Password = UpdateUser.Password;
            existingUser.Photograph = UpdateUser.Photograph;
            _context.Users.Update(existingUser);
            await _context.SaveChangesAsync();
        }

        /// <summary>
        /// <para>Resumo: Asynchronous method to delete a user</para>
        /// </summary>
        /// <param name="id">Id do usuario</param>
        public async Task DeleteUserAsync(int id)
        {
            _context.Users.Remove(await GetUserByIdAsync(id));
            await _context.SaveChangesAsync();
        }

        /// <summary>
        /// <para>Resumo: Asynchronous method to get a user by email</para>
        /// </summary>
        /// <param name="email">Email do usuario</param>
        /// <return>UsuarioModelo</return>
        public async Task<UserModel> GetUserByEmailAsync(string email)
        {
            return await _context.Users.FirstOrDefaultAsync(u => u.Email == email);
        }

        /// <summary>
        /// <para>Resumo: Asynchronous method to get a user by Id</para>
        /// </summary>
        /// <param name="id">Id of user</param>
        /// <return>UserModel</return>
        public async Task<UserModel> GetUserByIdAsync(int id)
        {
            return await _context.Users.FirstOrDefaultAsync(u => u.Id == id);
        }

        /// <summary>
        /// <para>Resumo: Asynchronous method to get users by name</para>
        /// </summary>
        /// <param name="name">Name of user</param>
        /// <return>Lista UserModel</return>
        public async Task<List<UserModel>> GetUserByNameAsync(string name)
        {
            return await _context.Users
                .Where(u => u.Name.Contains(name))
                .ToListAsync();
        }

            #endregion Methods
    }
}
