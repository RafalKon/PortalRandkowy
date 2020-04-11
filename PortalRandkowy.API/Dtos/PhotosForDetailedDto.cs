using System;

namespace PortalRandkowy.API.Dtos
{
    public class PhotosForDetailedDto
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public string Description { get; set; }
        public DateTime dateAdded { get; set; }
        public bool IsMain { get; set; }

    }
}