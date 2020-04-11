using System.Linq;
using AutoMapper;
using PortalRandkowy.API.Dtos;
using PortalRandkowy.API.Models;

namespace PortalRandkowy.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {

        public AutoMapperProfiles()
        {
            CreateMap<User, UserForListDto>()
            .ForMember(dest => dest.PhotoUrl, opt =>
            {
                opt.MapFrom(src => src.Photos.FirstOrDefault(predicate => predicate.IsMain).Url);
            })
            .ForMember(dest => dest.Age, opt =>
            {
                opt.ResolveUsing(src => src.DateOfBirth.CalculateAge());
            });
            CreateMap<User, UserForDetailsDto>()
             .ForMember(dest => dest.PhotoUrl, opt =>
            {
                opt.MapFrom(src => src.Photos.FirstOrDefault(predicate => predicate.IsMain).Url);
            })
               .ForMember(dest => dest.Age, opt =>
               {
                   opt.ResolveUsing(src => src.DateOfBirth.CalculateAge());
               });
            CreateMap<Photo, PhotosForDetailedDto>();

        }

    }
}