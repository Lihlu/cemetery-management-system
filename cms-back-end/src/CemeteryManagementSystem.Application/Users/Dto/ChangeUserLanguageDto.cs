using System.ComponentModel.DataAnnotations;

namespace CemeteryManagementSystem.Users.Dto;

public class ChangeUserLanguageDto
{
    [Required]
    public string LanguageName { get; set; }
}