using System.Collections.Generic;
using System.Threading.Tasks;
using PortalRandkowy.API.Helpers;
using PortalRandkowy.API.Models;

namespace PortalRandkowy.API.Data
{
    public interface IUserRepository : IGenericRepository
    {
        Task<User> GetUser(int id);
        Task<Photo> GetPhoto(int id);
        Task<Photo> GetMainPhotoForUser(int userId);
        Task<PagedList<User>> GetUsers(UserParams userParams);
        Task<Like> GetLike(int userId, int recipientId);








    }
}